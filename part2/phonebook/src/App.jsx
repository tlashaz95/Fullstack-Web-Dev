import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import AddPerson from "./components/AddPerson";
import Persons from "./components/Persons";
import Notification from "./components/Notification";
import phonebookService from "./services/phonebookServer";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);
  const [errorOp, setErrorOp] = useState(true)

  useEffect(() => {
    phonebookService.getAll().then((currentPhonebook) => {
      setPersons(currentPhonebook);
    });
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    const personObj = {
      name: newName,
      number: newNumber,
    };
    const trimmedName = personObj.name.trim();
    const trimmedNumber = personObj.number.trim();

    const isExisting = persons.some(
      (person) => person.name === trimmedName && person.number === trimmedNumber
    );
    const isUpdate = persons.find((person) => person.name === trimmedName);

    if (isExisting) {
      setErrorMessage(
        `${trimmedName} with number ${personObj.number} is already added to phonebook`
      );
      setErrorOp(false)
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    } else if (isUpdate != null) {
      confirm(
        `${trimmedName} is already added to phonebook, replace the old number with the new one?`
      );
      phonebookService.update(isUpdate.id, personObj).then((updatedPerson) => {
        setPersons(
          persons.map((person) =>
            person.id !== isUpdate.id ? person : updatedPerson
          )
        );
        setErrorMessage(
          `${trimmedNumber} is being replaced with the old number`
        );
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
      .catch(error => {
        setErrorMessage(`${error} in updating the ${personObj.name} phone number`)
        setErrorOp(false)
      })
    } else {
      phonebookService.create(personObj).then((newPerson) => {
        setPersons(persons.concat(newPerson));

        setErrorMessage(`${newPerson.name} has been added`);
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
      .catch(error => {
        setErrorMessage(`${error} in adding a new Person`)
        setErrorOp(false)
      })
    }

    setNewName("");
    setNewNumber("");
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterName(e.target.value);
  };

  const handleDelete = (person) => {
    if (window.confirm(`Delete ${person.name} ?`)) {
      phonebookService.remove(person.id).then((deletedPerson) => {
        setPersons(persons.filter((person) => person.id !== deletedPerson.id));
        setErrorMessage(`${deletedPerson.name} has been successfully deleted.`);
        setErrorOp(false)
        setTimeout(() => {
          setErrorMessage(null);
        }, 5000);
      })
      .catch(error => {
        setErrorMessage(`${person.name} has already been deleted from the server`)
        setErrorOp(false)
        setPersons(persons.filter((p) => p.id !== person.id));
      })
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} errorOp={errorOp}/>

      <Filter handleFilter={handleFilter} value={filterName} />

      <h3>Add new</h3>
      <AddPerson
        newVals={{ newName, newNumber }}
        handlers={{ handleAdd, handleNewName, handleNewNumber }}
      />

      <h2>Numbers</h2>
      <Persons
        persons={persons}
        filteredName={filterName}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;

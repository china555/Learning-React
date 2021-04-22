import Person from "./Person";
export const NameList = (props) => {
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "Clark", age: 25, skill: "Angular" },
    { id: 3, name: "Diana", age: 28, skill: "Vue" },
  ];
  const personList = persons.map((person) => {
    return <Person person={person} />;
  });
  return <div>{personList}</div>;
};

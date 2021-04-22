import Person from "./Person";
export const NameListAddKey = (props) => {
  const persons = [
    { id: 1, name: "Bruce", age: 30, skill: "React" },
    { id: 2, name: "Clark", age: 25, skill: "Angular" },
    { id: 3, name: "Diana", age: 28, skill: "Vue" },
  ];
  const personList = persons.map((person, index) => {
    return <Person key={index} person={person} index={index} />;
  });
  return <div>{personList}</div>;
};

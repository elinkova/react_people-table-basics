import { useState } from 'react';
import classnames from 'classnames';
import { Person } from '../../types';
import { PersonLink } from '../PersonLink';

interface Props {
  people: Person[];
}

export const PeopleTable:React.FC<Props> = ({ people }) => {
  const [selectedPersonSlug, setSelectedPersonSlug] = useState('');

  const findPerson = (name: string) => {
    return people.find(person => person.name === name);
  };

  const handleSelect = (slug: string) => {
    setSelectedPersonSlug(slug);
  };

  return (
    <table
      data-cy="peopleTable"
      className="table is-striped is-hoverable is-narrow is-fullwidth"
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Sex</th>
          <th>Born</th>
          <th>Died</th>
          <th>Mother</th>
          <th>Father</th>
        </tr>
      </thead>

      <tbody>
        {people.map(person => (
          <tr
            data-cy="person"
            key={person.name}
            className={classnames(
              { 'has-background-warning': person.slug === selectedPersonSlug },
            )}
          >
            <td>
              <PersonLink person={person} onSelect={handleSelect} />
            </td>

            <td>{person.sex}</td>
            <td>{person.born}</td>
            <td>{person.died}</td>
            <td>
              {person.motherName && findPerson(person.motherName)
                ? (
                  <PersonLink
                    person={findPerson(person.motherName)}
                    onSelect={handleSelect}
                  />
                )
                : person.motherName || '-'}
            </td>
            <td>
              {person.fatherName && findPerson(person.fatherName)
                ? (
                  <PersonLink
                    person={findPerson(person.fatherName)}
                    onSelect={handleSelect}
                  />
                )
                : person.fatherName || '-'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

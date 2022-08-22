import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Person } from '../types';

type Props = {
  person: Person | undefined,
  onSelect: (slug: string) => void,
};

export const PersonLink: React.FC<Props> = ({ person, onSelect }) => {
  return (
    <>
      {person && (
        <Link
          to={`/people/${person.slug}`}
          className={classNames({ 'has-text-danger': person.sex === 'f' })}
          onClick={() => {
            onSelect(person.slug);
          }}
        >
          {person.name}
        </Link>
      )}
    </>
  );
};

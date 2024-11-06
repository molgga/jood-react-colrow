import { Link } from 'react-router-dom';

export function DefaultHeader() {
  return (
    <div>
      <div>default-header</div>
      <div>
        <Link to="/" className="p-2">
          Home
        </Link>
        <Link to="/about" className="p-2">
          About
        </Link>
      </div>
    </div>
  );
}

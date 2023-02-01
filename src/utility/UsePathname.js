import { useLocation } from 'react-router-dom';

export function UsePathname() {
	const location = useLocation();

  return location.pathname;
}
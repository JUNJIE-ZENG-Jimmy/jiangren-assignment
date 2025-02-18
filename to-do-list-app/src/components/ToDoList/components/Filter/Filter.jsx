import './Filter.css';
const Filter = ({ currentFilter, onFilterChange }) => {
    return (
        <select
            className="filter-select"
            value={currentFilter}
            onChange={(e) => onFilterChange(e.target.value)}
        >
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="incomplete">Incomplete</option>
        </select>
    );
}

export default Filter;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FilterMenu({onChange, filter}) {
   return (
      <div className="filter-menu">
         <FontAwesomeIcon
            className="mr-3"
            onClick={() => onChange('view',{list: !filter.view.list})}
            icon={filter.view.list ? "list" : "border-all" }
            size="lg" />

         <FontAwesomeIcon
            onClick={() => onChange('date',{asc: !filter.date.asc})}
            icon={filter.date.asc ? "sort-numeric-up" : "sort-numeric-down" }
            size="lg" />
      </div>
   )
}

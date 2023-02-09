import { Link } from "react-router-dom";
import Moment from "react-moment";

export const COLUMNS = [
  {
    Header: "Titre",
    accessor: "attributes.titles.en_jp",
  },
  {
    Header: "Titre japonais",
    accessor: "attributes.titles.ja_jp",
  },
  {
    Header: "Âge recommandé",
    accessor: "attributes.ageRatingGuide",
  },
  {
    Header: "Date de sortie",
    accessor: "attributes.startDate",
    Cell: ({ row }) => <Moment format="MM/DD/YYYY"></Moment>,
  },
  {
    Header: "Rang",
    accessor: "attributes.ratingRank",
  },
  {
    Header: "Link",
    accessor: (row) => <Link to={`/anime/${row.id}`}>Voir les details</Link>,
    // Cell: (props) => <a href="url"> project details</a>,
  },
];

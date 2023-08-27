import { useState, useEffect } from "react";
import Cap from "./Cap";
import Pagination from "./Pagination";

const SearchCap = () => {
  const [capsules, setCapsules] = useState([]);
  const [filteredCapsules, setFilteredCapsules] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterOriginalLaunch, setFilterOriginalLaunch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 6;

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/capsules")
      .then((response) => response.json())
      .then((data) => {
        setCapsules(data);
        setFilteredCapsules(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Filter capsules based on selected filters
    const filtered = capsules.filter(
      (capsule) =>
        (!filterStatus || capsule.status === filterStatus) &&
        (!filterOriginalLaunch ||
          capsule.original_launch === filterOriginalLaunch) &&
        (!filterType || capsule.type === filterType)
    );
    setFilteredCapsules(filtered);
    setCurrentPage(1);
  }, [filterStatus, filterOriginalLaunch, filterType, capsules]);

  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = filteredCapsules.slice(
    indexOfFirstCapsule,
    indexOfLastCapsule
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-8" id="getstarted">
      <form className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Capsule Filter</h2>
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <input
            type="text"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            placeholder="Filter by status"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="originalLaunch"
            className="block text-sm font-medium text-gray-700"
          >
            Launch Date
          </label>
          <input
            type="text"
            value={filterOriginalLaunch}
            onChange={(e) => setFilterOriginalLaunch(e.target.value)}
            placeholder="Enter original launch date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700"
          >
            Type
          </label>
          <input
            type="text"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            placeholder="Enter capsule type"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>
      </form>
      <Cap data={currentCapsules} />
      <Pagination
        itemsPerPage={capsulesPerPage}
        totalItems={filteredCapsules.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default SearchCap;

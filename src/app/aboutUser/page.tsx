const AboutAdmin = () => {
  return (
    <div className="flex flex-1 flex-col justify-around gap-4 p-4 rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2 overflow-scroll overflow-y-auto">
      <h2 className="text-4xl text-center underline">
        Authenticated User Role
      </h2>
      <ul className="flex flex-col gap-4 self-center">
        <li>
          <strong>View Train Schedules:</strong>
          <ul>
            <li>
              Explore and view detailed schedules for various train routes.
            </li>
            <li>
              Stay informed about departure and arrival times, as well as any
              potential delays.
            </li>
          </ul>
        </li>
        <li>
          <strong>Add to Favorites:</strong>
          <ul>
            <li>
              Personalize your experience by adding your favorite train routes
              to your list.
            </li>
            <li>
              Easily access and manage your preferred routes for quick
              reference.
            </li>
          </ul>
        </li>
        <li>
          <strong>Favorite Stations:</strong>
          <ul>
            <li>
              Mark specific train stations as favorites for quick access to
              relevant information.
            </li>
            <li>
              Stay updated on the latest information for your preferred
              stations.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AboutAdmin;

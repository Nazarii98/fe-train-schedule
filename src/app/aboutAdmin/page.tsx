const AboutAdmin = () => {
  return (
    <div className="flex flex-1 flex-col justify-around gap-4 p-4 rounded-3xl bg-gray-800 bg-opacity-90 border-white border-2 overflow-scroll overflow-y-auto">
      <h2 className="text-4xl text-center underline">
        Authenticated Admin Role
      </h2>
      <ul className="flex flex-col gap-4 self-center">
        <li>
          <strong>Edit Train Routes:</strong>
          <ul>
            <li>
              Modify details of existing train routes, including departure
              times, arrival times, and stops.
            </li>
            <li>
              Ensure that the schedule is up-to-date and accurately reflects any
              changes.
            </li>
          </ul>
        </li>
        <li>
          <strong>Add New Routes:</strong>
          <ul>
            <li>
              Introduce new train routes to the system to accommodate evolving
              transportation needs.
            </li>
            <li>
              Define schedules and stops for new routes, providing users with
              expanded options.
            </li>
          </ul>
        </li>
        <li>
          <strong>Delete Routes:</strong>
          <ul>
            <li>
              Remove outdated or irrelevant train routes from the platform.
            </li>
            <li>
              Maintain a streamlined and efficient schedule for users by
              eliminating unnecessary routes.
            </li>
          </ul>
        </li>
        <li>
          <strong>Manage Station Information:</strong>
          <ul>
            <li>
              Update details for train stations, including location information
              and services offered.
            </li>
            <li>
              Ensure that users have access to accurate and relevant information
              about each station.
            </li>
          </ul>
        </li>
        <li>
          <strong>User Interaction Monitoring:</strong>
          <ul>
            <li>
              Monitor user interactions to identify popular routes and stations.
            </li>
            <li>
              Use insights to improve the overall user experience and optimize
              the platform based on user preferences.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AboutAdmin;

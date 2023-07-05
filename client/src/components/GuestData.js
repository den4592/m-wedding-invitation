const GuestData = ({ guestData }) => {
  return (
    <div className="guest-data">
      {guestData.length ? (
        guestData
          .slice(0)
          .reverse()
          .map((data, index) => {
            return (
              <div key={index} className="guest-box">
                <p className="from-text">From. {data.name}</p>
                <hr />
                <p className="text-text">{data.text}</p>
              </div>
            );
          })
      ) : (
        <p style={{ textAlign: "center" }}>No Data.</p>
      )}
    </div>
  );
};

export default GuestData;

const Badge = ({ title, color }) => {
  return (
    <div className={`badge ${color} px-4 py-5 mt-2 text-white`}>{title}</div>
  );
};

export default Badge;

const Button = ({ children, type = "button" }) => {
  return (
    <button
      type={type}
      className="
      w-full
      py-3
      rounded-xl
      bg-gradient-to-r
      from-indigo-600
      to-purple-600
      text-white
      font-semibold
      hover:scale-105
      transition"
    >
      {children}
    </button>
  );
};

export default Button;
const AppButton = ({children,onClick,type="button"}) => {
 return(
    <button
        className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type={type}
        onClick={onClick}
    >
      {children}
    </button>
 );
}
export default AppButton;
const Input = ({children,type="text",value,onChange,pattern,name,title,required}) => {
return (
<>

      <label className="block text-gray-600 text-base font-bold pb-1">
          {children}
      </label>
      <input
          className="bg-gray-100 appearance-none border-2 border-gray-100 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-100 mb-5"
          type={type}
          value={value}
          onChange={onChange}
          pattern={pattern}
          name={name}
          title={title}
          required={required}
      />

</>
)
}

export default Input;

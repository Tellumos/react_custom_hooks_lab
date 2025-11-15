import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
    const [ name, changeName ] = useLocalStorage("name", "")

    const [ serviceNumber, changeNumber ] = useLocalStorage("serviceNumber", "")

    function handleSubmit(e) {
      e.preventDefault()
    }

    function handleNameChange(e) {
      changeName(e.target.value)
    }

    function handleNumberChange(e) {
      changeNumber(e.target.value)
    }
    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} value={name} onChange={handleNameChange} />
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} value={serviceNumber} onChange={handleNumberChange} />

        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form
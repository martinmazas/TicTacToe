import { useState } from 'react'

const styles = {
    label: {
        display: 'block',
        marginBottom: 10,
        color: 'white',
    },
    form: {
        padding: '20vh',
    },
    input: {
        width: '100%',
        padding: 10,
        marginTop: 5,
        marginBottom: 10
    }
}

export default function AddPlayer() {
    const [formData, setFormData] = useState({ firstName: '', secondName: '', imgPath: '', country: '', team: '', img: '' })

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
    }

    return (
        <>
            <form style={styles.form} onSubmit={handleSubmit} >
                <label style={styles.label} htmlFor='First Name'>First Name:
                    <input style={styles.input} type='text' id='firstName' name='firstName' value={formData.firstName} onChange={handleChange} />
                </label>

                <label style={styles.label} htmlFor='Second Name'>Second Name:
                    <input style={styles.input} type='text' id='secondName' name='secondName' value={formData.secondName} onChange={handleChange} />
                </label>

                <label style={styles.label} htmlFor='Image Path'>Image Path:
                    <input style={styles.input} type='text' id='imgPath' name='imgPath' value={formData.imgPath} onChange={handleChange} />
                </label>

                <label style={styles.label} htmlFor='Country'>Country:
                    <input style={styles.input} type='text' id='country' name='country' value={formData.country} onChange={handleChange} />
                </label>

                <label style={styles.label} htmlFor='Team'>Team:
                    <input style={styles.input} type='text' id='team' name='team' value={formData.team} onChange={handleChange} />
                </label>

                <label style={styles.label} htmlFor='Image'>Image:
                    <input style={styles.input} type='text' id='img' name='img' value={formData.img} onChange={handleChange} />
                </label>

                <button type='submit'>submit</button>
            </form>
        </>
    )
}
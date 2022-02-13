import React, {useState} from 'react'
import './AddProject.css'
import { db, storage } from '../../firebase/firebase'

function AddProject() {
  const [image, setImage] = useState()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState('')
  const[imagePreview, setImagePreview] = useState()

  const handleUpload = (e) => {
    e.preventDefault()
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error)
      },
      () => storage.
        ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
          db.collection('projects').add({
            image: url,
            title,
            details: description
        })
      })
      
    )
  }

  return (
    <div className='AddProject'>
          <form onSubmit={handleUpload} action='' className='addForm'>
              <div className='preview'>
              
                <img src={imagePreview} className='preview-image' />
                <p>(700x300)</p>
              </div>
              <div className='file-input-field'>
                <label for='image-input'>Upload Image</label>
          <input id='image-input' onChange={(e) => {
            setImage(e.target.files[0])
            setImagePreview(URL.createObjectURL(e.target.files[0]))
          }} type='file' />
              </div> 
              <div className='input-field'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
              </div>
              <div>
                <textarea placeholder='Details' className='description-field' value={description} onChange={e => setDescription(e.target.value)} />
              </div>
        <input type='submit' className='login-btn' value="Post" />
          </form>      
    </div>
  )
}

export default AddProject
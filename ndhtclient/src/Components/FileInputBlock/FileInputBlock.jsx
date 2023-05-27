import React from 'react'

const FileInputBlock = ({setSelectedFile}) => {
  return (
    <div>
    <h3>1. Загрузка данных.</h3>
    <div className="mb-3">
      <label htmlFor="formFileSm" className="form-label">
        Файл должен быть формата .csv
      </label>
      <input
        className="form-control form-control-sm w-25"
        id="formFileSm"
        type="file"
        accept=".csv"
        onChange={(event) => setSelectedFile(event.target.files[0])}
      />
    </div>
  </div>
  )
}

export default FileInputBlock
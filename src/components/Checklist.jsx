import React, { useState } from 'react';
import '../css/checklist.css';

const Checklist = () => {
  const [checks, setChecks] = useState({
    check1: false,
    check2: false,
    check3: false,
    check4: false,
    check5: false,
    check6: false
  });

  const handleCheck = (e) => {
    const { name, checked } = e.target;
    setChecks((prevChecks) => ({ ...prevChecks, [name]: checked }));
  };

  return (
    <div className="checklist-container">
      <h2 className="checklist-title">Checklist</h2>
      <ul className="checklist-list">
        <li>
          <input
            type="checkbox"
            name="check1"
            checked={checks.check1}
            onChange={handleCheck}
          />
          <a href="path/to/check1.pdf" target="_blank">Inicio de turno HEMS</a>
        </li>
        <li>
          <input
            type="checkbox"
            name="check2"
            checked={checks.check2}
            onChange={handleCheck}
          />
          <a href="path/to/check2.pdf" target="_blank">Final de turno HEMS</a>
        </li>
        <li>
          <input
            type="checkbox"
            name="check3"
            checked={checks.check3}
            onChange={handleCheck}
          />
          <a href="path/to/check3.pdf" target="_blank">Material de embarque desde base</a>
        </li>
        <li>
          <input
            type="checkbox"
            name="check4"
            checked={checks.check4}
            onChange={handleCheck}
          />
          <a href="path/to/check4.pdf" target="_blank">Material de re-embarques durante misión</a>
        </li>
        <li>
          <input
            type="checkbox"
            name="check5"
            checked={checks.check5}
            onChange={handleCheck}
          />
          <a href="path/to/check5.pdf" target="_blank">Material a desembarcar en fin de misión</a>
        </li>
        <li>
          <input
            type="checkbox"
            name="check6"
            checked={checks.check6}
            onChange={handleCheck}
          />
          <a href="path/to/check6.pdf" target="_blank">Preparación del paciente antes de vuelo HEMS</a>
        </li>
      </ul>
    </div>
  );
};

export default Checklist;
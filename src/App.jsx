import { useReducer } from "react";

const colorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLOR':
      return {
        ...state,
        [action.payload.property]: action.payload.value,
      };
    default:
      return state;
  }
};

function App() {


  const [color, dispatch] = useReducer(colorReducer, {
    hue: 0,
    saturation: 100,
    lightness: 50,
  });

  const handleChange = (property, value) => {
    // Renk değerlerini güncelle
    dispatch({
      type: 'SET_COLOR',
      payload: { property, value },
    });
  };
  
return(


  <div>
  <h1>Renk Değiştirici</h1>
  <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
    <label>Hue:</label>
    <input
      type="range"
      min="0"
      max="360"
      value={color.hue}
      onChange={(e) => handleChange('hue', e.target.value)}
    />
    <span>{color.hue}</span>
  </div>
  <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
    <label>Saturation:</label>
    <input
      type="range"
      min="0"
      max="100"
      value={color.saturation}
      onChange={(e) => handleChange('saturation', e.target.value)}
    />
    <span>{color.saturation}</span>
  </div>
  <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
    <label>Lightness:</label>
    <input
      type="range"
      min="0"
      max="100"
      value={color.lightness}
      onChange={(e) => handleChange('lightness', e.target.value)}
    />
    <span>{color.lightness}</span>
  </div>
  <div
    style={{
      width: '200px',
      height: '200px',
      backgroundColor: `hsl(${color.hue}, ${color.saturation}%, ${color.lightness}%)`,
      borderRadius: '8px',
    }}
  ></div>
</div>

)

  
}

export default App

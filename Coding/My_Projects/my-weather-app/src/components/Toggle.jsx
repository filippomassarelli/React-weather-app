import React, {useState} from 'react';
import CheckIcon from '@material-ui/icons/Check';
import ToggleButton from '@material-ui/lab/ToggleButton';
import AddIcon from '@material-ui/icons/Add';

export default function StandaloneToggleButton(props) {
  const [selected, setSelected] = useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
        props.askForecast();
      }}
    >
      <AddIcon />
    </ToggleButton>
  );
}
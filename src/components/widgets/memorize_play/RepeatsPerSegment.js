import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';
import { setRepeatsPerSegment } from '../../../redux/reducers/repeatsPerSegment.reducer';

const _RANGE_INC = 1
const _RANGE_START = 1
const _RANGE_END = 50

const RepeatsPerSegment = () => {
  const repeatsPerSegment = useSelector((state)=>state.repeatsPerSegment.value)
  const dispatch = useDispatch()

  const range = (start, end) => {
    if(!Number.isInteger(start) || !Number.isInteger(end) || start > end){
      return []
    }
    let arr = [start]
    for(let i = start + _RANGE_INC; i < end - _RANGE_INC; i += _RANGE_INC) {
      arr.push(i)
    }
    return arr
  }

  const handleChange = (event) => {
    dispatch(setRepeatsPerSegment(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 100}}>
      <FormControl fullWidth variant="standard">
        <Select
          labelId="repeats-per-seg-label"
          id="repeats-per-seg"
          value={repeatsPerSegment}
          label="Repeats per segment"
          onChange={handleChange}
        >
          {range(_RANGE_START, _RANGE_END).map(i => <MenuItem key={i} value={i}>{i} </MenuItem>)} {/*{i===25?"(recommended)":""}*/}
        </Select>
        <FormHelperText>Reps/Segment</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default RepeatsPerSegment;
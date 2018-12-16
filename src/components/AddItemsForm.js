import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import classNames from 'classnames'
import MenuItem from '@material-ui/core/MenuItem'
import Modal from 'react-responsive-modal'
import Fab from '@material-ui/core/Fab'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '1rem 5rem',
    [theme.breakpoints.down('sm')]: {
      margin: '1rem 1rem',
    },
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  mt1: {
    marginTop: '1rem'
  },
  floatingBtn: {
    position: 'absolute',
    right: '2rem',
    bottom: '2rem',
    zIndex: 9
  }
})

const mentorsList = [
  {
    value: '1',
    label: 'Mia Michelle',
  },
  {
    value: '2',
    label: 'Joe Johnson',
  },
  {
    value: '3',
    label: 'Kim Karlsen',
  },
]

class AddItemsForm extends React.Component {
  state = {
    mentor: '',
    status: '',
    start: '2019-01-01',
    end: '2019-01-01',
    open: false
  }

  onOpenModal = () => this.setState({open: true})

  onCloseModal = () => this.setState({open: false})

  handleChange = prop => event => this.setState({[prop]: event.target.value})

  formSubmitHandler = e => e.preventDefault()

  render = () => {
    const {open} = this.state
    const {classes} = this.props
    return (
      <>
        <Fab color="secondary" onClick={this.onOpenModal}
             aria-label="Add" className={classes.floatingBtn}>
          <AddIcon />
        </Fab>
        <Modal open={open} onClose={this.onCloseModal} center>
          <div className={classes.root}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <form onSubmit={this.formSubmitHandler}>
                  {/*Mentors list*/}
                  <TextField
                    select
                    label="Chose mentor"
                    className={classNames(classes.margin, classes.textField)}
                    value={this.state.mentor}
                    onChange={this.handleChange('mentor')}
                    fullWidth={true}
                  >
                    {mentorsList.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>

                  {/*status*/}
                  <TextField
                    id="standard-name"
                    label="status"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('status')}
                    margin="normal"
                    fullWidth={true}
                  />
                  {/*Date*/}
                  <Grid container spacing={24}>
                    {/*start*/}
                    <Grid item md={6}>
                      <TextField
                        id="date"
                        label="Start"
                        type="date"
                        defaultValue={this.state.start}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleChange('start')}
                        fullWidth={true}
                      />
                    </Grid>
                    {/*end*/}
                    <Grid item md={6}>
                      <TextField
                        id="date"
                        label="End"
                        type="date"
                        defaultValue={this.state.end}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={this.handleChange('end')}
                        fullWidth={true}
                      />
                    </Grid>
                  </Grid>

                  {/*Submit*/}
                  <Button onClick={() => {
                    this.onCloseModal()
                    return this.props.onAddItem(this.state)
                  }}
                          className={classes.mt1} variant="contained"
                          color="primary">
                    <AddIcon /> add
                  </Button>
                </form>
              </Grid>
            </Grid>
          </div>
        </Modal>
      </>
    )
  }
}

export default withStyles(styles)(AddItemsForm)
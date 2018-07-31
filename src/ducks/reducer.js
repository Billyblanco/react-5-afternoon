const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_PROPERTY_TYPE = 'UPDATE_LOAN_TYPE'
const UPDATE_CITY = 'UPDATE_CITY'
const UPDATE_PROP = 'UPDATE_PROP'
const UPDATE_FOUND = 'UPDATE_FOUND'
const UPDATE_REALESTATE_AGENT = 'UPDATE_REALESTATE_AGENT'
const UPDATE_COST = 'UPDATE_COST'
const UPDATE_DOWNPAYMENT = 'UPDATE_DOWNPAYMENT'
const UPDATE_CREDIT = 'UPDATE_CREDIT'
const UPDATE_HISTORY = 'UPDATE_HISTORY'
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE'
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO'
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE'
const UPDATE_FIRSTNAME = 'UPDATE_FIRSTNAME'
const UPDATE_LASTNAME = 'UPDATE_LASTNAME'
const UPDATE_EMAIL = 'UPDATE_EMAIL'


const initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home' ,
  city: '',
  propToBeUsedOn: '',
  found: "false",
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
}


function reducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return { ...state, loanType: action.payload}
    case UPDATE_PROPERTY_TYPE:
      return {...state, propertyType: action.payload}
    case UPDATE_CITY:
      return {... state, city: action.payload}
    case UPDATE_PROP: 
      return {...state, propToBeUsedOn: action.payload}
    case UPDATE_FOUND: 
      return {...state, found: action.payload}
    case UPDATE_REALESTATE_AGENT:
      return {...state, realEstateAgent: action.payload}
    case UPDATE_COST:
      return {...state, cost: action.payload}
    case UPDATE_DOWNPAYMENT:
      return {...state, downPayment: action.payload}
    case UPDATE_CREDIT:
      return {...state, credit: action.payload}
    case UPDATE_HISTORY:
      return {...state, history: action.payload}
    case UPDATE_ADDRESS_ONE:
      return {...state, addressOne: action.payload}
    case UPDATE_ADDRESS_TWO:
      return {...state, addressTwo: action.payload}
    case UPDATE_ADDRESS_THREE:
      return {...state, addressThree: action.payload}
    case UPDATE_FIRSTNAME:
      return {...state, firstName: action.payload}
    case UPDATE_LASTNAME:
      return {...state, lastName: action.payload}
    case UPDATE_EMAIL:
      return {...state, email: action.payload}
    default:
      return state;
  }

}



export default reducer;
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

export function updateLoanType(loanType) {
  return {
    type: UPDATE_LOAN_TYPE ,
    payload: loanType
  }
}

export function updatePropertyType (property) {
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: property
  }
}

export function updateCity (city) {
  return {
    type: UPDATE_CITY,
    payload: city
  }
}
export function updateProp (prop) {
  return {
    type: UPDATE_PROP,
    payload: prop
  }
}

export function updateFound (found) {
  return {
    type: UPDATE_FOUND,
    payload: found
  }
}

export function updateRealEsateAgent (realEstateAgent) {
  return {
    type: UPDATE_REALESTATE_AGENT,
    payload: realEstateAgent
  }
}

export function updateCost (cost) {
  return {
    type: UPDATE_COST,
    payload: cost
  }
}

export function updateDownPayment (payment) {
  return {
    type: UPDATE_DOWNPAYMENT,
    payload: payment
  }
}

export function updateCredit (credit) {
  return {
    type: UPDATE_CREDIT,
    payload: credit
  }
}
export function updateHistory (history) {
  return {
    type: UPDATE_HISTORY,
    payload: history
  }
}
export function updateAddressOne (address) {
  return {
    type: UPDATE_ADDRESS_ONE,
    payload: address
  }
}
export function updateAddressTwo (address) {
  return {
    type: UPDATE_ADDRESS_TWO,
    payload: address
  }
}
export function updateAddressThree (address) {
  return {
    type: UPDATE_ADDRESS_THREE,
    payload: address
  }
}
export function updateFirstName (firstName) {
  return {
    type: UPDATE_FIRSTNAME,
    payload: firstName
  }
}
export function updateLastName (lastName) {
  return {
    type: UPDATE_LASTNAME,
    payload: lastName
  }
}
export function updateEmail (email) {
  return {
    type: UPDATE_EMAIL,
    payload: email
  }
}

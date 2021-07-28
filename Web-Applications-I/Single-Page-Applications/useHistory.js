// The final hook we'll look at today allows us to create dynamic elements (buttons, text, etc.) whose function changes based on a user's history.

// For example, in a storefront webpage, we could create a button called "return to last item" that would return to the last item the user viewed 
// (wither that be a T-shirt, or a pair of shoes), rather than a default list of items or home page.

// The hook we will use to accomplish this is called useHistory.

// For example, code that looks like this would render the last component the user visited when the button is clicked.

import { useHistory } from 'react-router-dom'

function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
// This is useful for navigation, among other things.

// great summary of react router hooks
// https://reactrouter.com/web/api/Hooks


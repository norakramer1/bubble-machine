
export const renderLogin = (req, res) => {
    res.render('home')

  }

export const renderOnboarding = (req, res) => {
    res.render('onboarding')
    res.redirect('home')
  }


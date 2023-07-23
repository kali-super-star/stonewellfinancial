import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon'
import styles from '../../assets/jss/styles/infoStyle'

import { Text } from '../common/LanguageProvider'

const useStyles = makeStyles(styles)

export default function InfoArea(props) {
  const { title, description, iconColor, vertical, className } = props
  const classes = useStyles()
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical,
  })
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical,
  })
  const infoAreaClasses = classNames({
    [classes.infoArea]: true,
    [className]: className !== undefined,
  })
  let icon = null
  switch (typeof props.icon) {
    case 'string':
      icon = <Icon className={iconClasses}>{props.icon}</Icon>
      break
    default:
      icon = <props.icon className={iconClasses} />
      break
  }
  return (
    <div className={infoAreaClasses}>
      <div className={iconWrapper}>{icon}</div>
      <div className={classes.descriptionWrapper}>
        <h3 className={classes.title}>
          <Text tid={`Banner.Whyus.list.${title}.label`} />
        </h3>
        <div className={classes.description}>
          <Text tid={`Banner.Whyus.list.${description}.detail`} />
        </div>
      </div>
    </div>
  )
}

InfoArea.defaultProps = {
  iconColor: 'gray',
}

InfoArea.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.node.isRequired,
  iconColor: PropTypes.oneOf(['primary', 'secondary', 'gray']),
  vertical: PropTypes.bool,
  className: PropTypes.string,
}

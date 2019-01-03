import React from 'react'
import FA from 'react-fontawesome'
import { Button } from 'antd'

const style = {
}

export default function(_props: any) {

  return (
    <div style={style} className="is-flex">

      <a className="button is-primary">I'm a bulma button</a>
      <a>A fontawesome icon -> <FA name="cog" /></a>
      <Button type="primary">I'm a antd button</Button>

    </div>
  )

}
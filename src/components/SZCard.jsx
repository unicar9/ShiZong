import React, { Component } from 'react'
import { Button, Image, Form, Input, Segment } from 'semantic-ui-react'

const activityOptions = [
    { text: "Reading", value: "reading" },
    { text: "Workout", value: "workout" },
    { text: "Study", value: "study" }
]

class SZCard extends Component {
    render(){
        return(
            // <Card>
            //     <Card.Content>
            //         <Card.Header>
            //             What Have You Done
            //         </Card.Header>
            //     </Card.Content>
            //     <Card.Content>
            //         <Form>
            //             <Form.Select label='Activity' options={activityOptions} placeholder='Activity' />
            //             <Form.Group widths='equal'>
            //                <Input
            //                 label='hr'
            //                 placeholder='Input Hours'
            //                />
            //                <Input
            //                 label='min'
            //                 placeholder='Input Minutes'
            //                />
            //             </Form.Group>
            //             <Form.Field control={Button} basic color='green'>OK</Form.Field>
            //         </Form>
            //     </Card.Content>
            // </Card>
            <Segment inverted={this.props.inverted} color={this.props.color}>
                <Form>
                    <Form.Select label='Activity' options={activityOptions} placeholder='Activity' />
                    <Form.Group widths='equal'>
                        <Input
                            label='hr'
                            placeholder='Input Hours'
                        />
                        <Input
                            label='min'
                            placeholder='Input Minutes'
                        />
                    </Form.Group>
                    <Form.Field control={Button} basic color='green'>OK</Form.Field>
                </Form>
            </Segment>
        )
    }
}

export default SZCard
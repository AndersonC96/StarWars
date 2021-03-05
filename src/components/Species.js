import React from 'react';
import {Card, Grid} from 'semantic-ui-react';
export default function Species({data}){
    return(
        <>
            <h1>Species</h1>
            <Grid columns={5}>
                {data.map((species, i) => {
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>{species.name}</Card.Header>
                                    <Card.Description>
                                        <strong>Classification</strong>
                                            <p>{species.classification}</p>
                                        <strong>Designation</strong>
                                            <p>{species.designation}</p>
                                        <strong>Average Height</strong>
                                            <p>{species.average_height}</p>
                                        <strong>Skin Colors</strong>
                                            <p>{species.skin_colors}</p>
                                        <strong>Hair Colors</strong>
                                            <p>{species.hair_colors}</p>
                                        <strong>Eye Colors</strong>
                                            <p>{species.eye_colors}</p>
                                        <strong>Average Lifespan</strong>
                                            <p>{species.average_lifespan}</p>
                                        <strong>Language</strong>
                                            <p>{species.language}</p>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    );
                })}
            </Grid>
        </>
    )
}
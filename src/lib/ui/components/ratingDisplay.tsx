import { Grid } from "@material-ui/core";
import { Grade, GradeOutlined } from "@material-ui/icons";
import React from "react";

export default function RatingDisplay({rating, size, color}) {

    if (rating === 0) {

        return(
            <Grid item>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
            </Grid>
        )

    } else if (rating === 1) {

        return(
            <Grid item>
                <Grade fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
            </Grid>
        )

    } else if (rating === 2) {

        return(
            <Grid item>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
            </Grid>
        )

    } else if (rating === 3) {

        return(
            <Grid item>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
            </Grid>
        )

    } else if (rating === 4) {

        return(
            <Grid item>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <GradeOutlined fontSize={size} color={color}/>
            </Grid>
        )

    } else {

        return(
            <Grid item>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
                <Grade fontSize={size} color={color}/>
            </Grid>
        )

    }
 
}

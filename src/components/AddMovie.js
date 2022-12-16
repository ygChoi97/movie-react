import React, { useState } from 'react';
import { TextField, Paper, Button, Grid } from "@mui/material";

function AddMovie({ add }) {

    // 사용자의 입력을 저장할 객체
    const [item, setItem] = useState({ movieCd: '' });

    // 입력창에 값이 변할 때마다 item객체안에 movieCd 자동 저장
    const changeHandler = e => {
        // console.log(e.target.value);
        setItem({ movieCd: e.target.value });
    };

    // 입력버튼 클릭 이벤트핸들러
    const addClickHandler = e => {
        // console.log('버튼 클릭!!');
        add(item);
        setItem({ movieCd: '' });
    };

    // 엔터 이벤트
    // const enterHandler = e => {
    //     if (e.key === 'Enter') {
    //         addClickHandler();
    //     }
    // };

    return (
        <Paper style={{ margin: 16, padding: 16 }}>
            <Grid container>
                <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
                    <TextField
                        placeholder="Add movieCd Here"
                        fullWidth
                        onChange={changeHandler}
                        //onKeyUp={enterHandler}
                        value={item.movieCd}
                    />
                </Grid>
                <Grid xs={1} md={1} item>
                    <Button
                        fullWidth
                        color="secondary"
                        variant="outlined"
                        onClick={addClickHandler}

                    >
                        +
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );

}

export default AddMovie;
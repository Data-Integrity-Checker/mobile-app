import express, { Router } from 'express';
import index from './controllers/devices';

const router = Router();

router.route('/devices.json')
    .get(index);

router.get('/', function(req, res){
    Post.find({}, function(err, posts){
        if(err){
            console.log(err);
        } else {
            res.json({posts:posts});
        }
    });
});

export default router;
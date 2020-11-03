module.exports = {
    'aws': {
        'key': process.env.secretID,
        'secret': process.env.secretKey,
        'ses': {
            'from': {
                // replace with actual email addressno
                'default': process.env.email, 
            },
            // e.g. us-west-2
            'region': 'us-east-1' 
        }
    }
}
const Health  = async (req,res)=>{
    res.status(200).json({ status: 'OK', message: 'Vyaparsathi backend is live' });
}

export default Health;
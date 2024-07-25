
exports.getTrees = async (req, res) => {
	try {
		res.json({ success: true, data: "100 ped h bhai" });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};


exports.getWaste = async (req, res) => {
	try {
		res.json({ success: true, data: "gadi vla aya ghr se kuda nikaal" });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};

exports.getCarbon = async (req, res) => {
	try {
		res.json({ success: true, data: "100 kg h carbon bhai" });
	} catch (error) {
		res.status(500).json({ success: false, error: error });
	}
};
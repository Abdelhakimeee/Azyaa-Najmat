export const fetchProducts = async () => {
    try {
        let result = await fetch('http://localhost:5800/api/products');
        result = await result.json();
        return result.sort((a, b) => b._id.localeCompare(a._id));
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const searchProducts = async (key) => {
    try {
        // the error from backend request ...   # i thik: you have to chage the type in front than send it to back like object       / not do : this bade : or make backend understand list just json 
        // الخطأ الذي تواجهه يشير إلى أنك تحاول العثور على منتج باستخدام قيمة ID غير صحيحة أو غير متوافقة مع نوع البيانات المتوقع في قاعدة البيانات. في هذه الحالة، القيمة "44" هي سلسلة نصية (string)، ولكن Mongoose يتوقع قيمة من نوع ObjectId لتمثيل المعرف الفريد للمنتج.
        let result = await fetch(`http://localhost:5800/api/products/${key}`);
        return await result.json();
    } catch (error) {
        console.error('Error searching products:', error);
        return [];
    }
};

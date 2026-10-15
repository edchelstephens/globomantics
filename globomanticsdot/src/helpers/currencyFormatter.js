const currencyFormatter = Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    maximumFractionDigits: 0
});

export default currencyFormatter;
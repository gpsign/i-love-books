export function conflictError() {
	return {
		type: "conflictError",
		message: "Element already exists",
	};
}

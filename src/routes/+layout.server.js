export const load = ({ locals: { locale, LL } }) => {
	console.info(LL.HI({ name: '+layout.server.ts' }));

	// pass locale information from "server-context" to "shared server + client context"
	return { locale };
};

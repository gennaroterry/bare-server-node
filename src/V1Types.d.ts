import type { BareRemote } from './remoteUtil.js';
import type { BareHeaders } from './requestUtil.js';

export interface BareV1Meta {
	remote: BareRemote;
	headers: BareHeaders;
	forward_headers: string[];
	id?: string;
}

export interface BareV1MetaRes {
	headers: BareHeaders;
}

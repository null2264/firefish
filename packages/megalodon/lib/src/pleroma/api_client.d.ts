import MegalodonEntity from '../entity';
import PleromaEntity from './entity';
import Response from '../response';
import { ProxyConfig } from '../proxy_config';
import WebSocket from './web_socket';
import NotificationType from '../notification';
declare namespace PleromaAPI {
    namespace Entity {
        type Account = PleromaEntity.Account;
        type Activity = PleromaEntity.Activity;
        type Announcement = PleromaEntity.Announcement;
        type Application = PleromaEntity.Application;
        type AsyncAttachment = PleromaEntity.AsyncAttachment;
        type Attachment = PleromaEntity.Attachment;
        type Card = PleromaEntity.Card;
        type Context = PleromaEntity.Context;
        type Conversation = PleromaEntity.Conversation;
        type Emoji = PleromaEntity.Emoji;
        type FeaturedTag = PleromaEntity.FeaturedTag;
        type Field = PleromaEntity.Field;
        type Filter = PleromaEntity.Filter;
        type History = PleromaEntity.History;
        type IdentityProof = PleromaEntity.IdentityProof;
        type Instance = PleromaEntity.Instance;
        type List = PleromaEntity.List;
        type Marker = PleromaEntity.Marker;
        type Mention = PleromaEntity.Mention;
        type Notification = PleromaEntity.Notification;
        type Poll = PleromaEntity.Poll;
        type PollOption = PleromaEntity.PollOption;
        type Preferences = PleromaEntity.Preferences;
        type PushSubscription = PleromaEntity.PushSubscription;
        type Reaction = PleromaEntity.Reaction;
        type Relationship = PleromaEntity.Relationship;
        type Report = PleromaEntity.Report;
        type Results = PleromaEntity.Results;
        type ScheduledStatus = PleromaEntity.ScheduledStatus;
        type Source = PleromaEntity.Source;
        type Stats = PleromaEntity.Stats;
        type Status = PleromaEntity.Status;
        type StatusParams = PleromaEntity.StatusParams;
        type Tag = PleromaEntity.Tag;
        type Token = PleromaEntity.Token;
        type URLs = PleromaEntity.URLs;
    }
    namespace Converter {
        const decodeNotificationType: (t: PleromaEntity.NotificationType) => MegalodonEntity.NotificationType;
        const encodeNotificationType: (t: MegalodonEntity.NotificationType) => PleromaEntity.NotificationType;
        const account: (a: Entity.Account) => MegalodonEntity.Account;
        const activity: (a: Entity.Activity) => MegalodonEntity.Activity;
        const announcement: (a: Entity.Announcement) => MegalodonEntity.Announcement;
        const application: (a: Entity.Application) => MegalodonEntity.Application;
        const attachment: (a: Entity.Attachment) => MegalodonEntity.Attachment;
        const async_attachment: (a: Entity.AsyncAttachment) => MegalodonEntity.Attachment | MegalodonEntity.AsyncAttachment;
        const card: (c: Entity.Card) => MegalodonEntity.Card;
        const context: (c: Entity.Context) => MegalodonEntity.Context;
        const conversation: (c: Entity.Conversation) => MegalodonEntity.Conversation;
        const emoji: (e: Entity.Emoji) => MegalodonEntity.Emoji;
        const featured_tag: (f: Entity.FeaturedTag) => MegalodonEntity.FeaturedTag;
        const field: (f: Entity.Field) => MegalodonEntity.Field;
        const filter: (f: Entity.Filter) => MegalodonEntity.Filter;
        const history: (h: Entity.History) => MegalodonEntity.History;
        const identity_proof: (i: Entity.IdentityProof) => MegalodonEntity.IdentityProof;
        const instance: (i: Entity.Instance) => MegalodonEntity.Instance;
        const list: (l: Entity.List) => MegalodonEntity.List;
        const marker: (m: Entity.Marker) => MegalodonEntity.Marker;
        const mention: (m: Entity.Mention) => MegalodonEntity.Mention;
        const notification: (n: Entity.Notification) => MegalodonEntity.Notification;
        const poll: (p: Entity.Poll) => MegalodonEntity.Poll;
        const pollOption: (p: Entity.PollOption) => MegalodonEntity.PollOption;
        const preferences: (p: Entity.Preferences) => MegalodonEntity.Preferences;
        const push_subscription: (p: Entity.PushSubscription) => MegalodonEntity.PushSubscription;
        const reaction: (r: Entity.Reaction) => MegalodonEntity.Reaction;
        const relationship: (r: Entity.Relationship) => MegalodonEntity.Relationship;
        const report: (r: Entity.Report) => MegalodonEntity.Report;
        const results: (r: Entity.Results) => MegalodonEntity.Results;
        const scheduled_status: (s: Entity.ScheduledStatus) => MegalodonEntity.ScheduledStatus;
        const source: (s: Entity.Source) => MegalodonEntity.Source;
        const stats: (s: Entity.Stats) => MegalodonEntity.Stats;
        const status: (s: Entity.Status) => MegalodonEntity.Status;
        const status_params: (s: Entity.StatusParams) => MegalodonEntity.StatusParams;
        const tag: (t: Entity.Tag) => MegalodonEntity.Tag;
        const token: (t: Entity.Token) => MegalodonEntity.Token;
        const urls: (u: Entity.URLs) => MegalodonEntity.URLs;
    }
    interface Interface {
        get<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        put<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        putForm<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        patch<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        patchForm<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        post<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        postForm<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        del<T = any>(path: string, params?: any, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        cancel(): void;
        socket(path: string, stream: string, params?: string): WebSocket;
    }
    class Client implements Interface {
        static DEFAULT_SCOPE: string[];
        static DEFAULT_URL: string;
        static NO_REDIRECT: string;
        private accessToken;
        private baseUrl;
        private userAgent;
        private abortController;
        private proxyConfig;
        constructor(baseUrl: string, accessToken?: string | null, userAgent?: string, proxyConfig?: ProxyConfig | false);
        get<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        put<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        putForm<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        patch<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        patchForm<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        post<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        postForm<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        del<T>(path: string, params?: {}, headers?: {
            [key: string]: string;
        }): Promise<Response<T>>;
        cancel(): void;
        socket(path: string, stream: string, params?: string): WebSocket;
    }
}
export default PleromaAPI;

export declare type LogLevels = 'error' | 'warning' | 'none';
export interface GetGithubContributions {
    username: string;
    config?: {
        partition?: undefined | 'year' | 'all';
        proxy?: undefined | string | null;
        logs?: LogLevels;
    };
}
export declare const getGithubContributions: ({ username, config }: GetGithubContributions) => Promise<any>;
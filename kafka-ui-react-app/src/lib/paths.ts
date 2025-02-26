import { ClusterName, SchemaName, TopicName } from 'redux/interfaces';
import { GIT_REPO_LINK } from './constants';

export const gitCommitPath = (commit: string) =>
  `${GIT_REPO_LINK}/commit/${commit}`;

const clusterPath = (clusterName: ClusterName) => `/ui/clusters/${clusterName}`;

// Brokers
export const clusterBrokersPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/brokers`;

// Consumer Groups
export const clusterConsumerGroupsPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/consumer-groups`;

// Schemas
export const clusterSchemasPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/schemas`;
export const clusterSchemaNewPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/schemas/create_new`;
export const clusterSchemaPath = (
  clusterName: ClusterName,
  subject: SchemaName
) => `${clusterSchemasPath(clusterName)}/${subject}/latest`;

// Topics
export const clusterTopicsPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/topics`;
export const clusterTopicNewPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/topics/create_new`;
export const clusterTopicPath = (
  clusterName: ClusterName,
  topicName: TopicName
) => `${clusterTopicsPath(clusterName)}/${topicName}`;
export const clusterTopicSettingsPath = (
  clusterName: ClusterName,
  topicName: TopicName
) => `${clusterTopicsPath(clusterName)}/${topicName}/settings`;
export const clusterTopicMessagesPath = (
  clusterName: ClusterName,
  topicName: TopicName
) => `${clusterTopicsPath(clusterName)}/${topicName}/messages`;
export const clusterTopicsTopicEditPath = (
  clusterName: ClusterName,
  topicName: TopicName
) => `${clusterTopicsPath(clusterName)}/${topicName}/edit`;

// Kafka Connect
export const clusterConnectorsPath = (clusterName: ClusterName) =>
  `${clusterPath(clusterName)}/connectors`;

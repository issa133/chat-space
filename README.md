## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false|

### Association
has_many :groups, through: groups_users
- has_many :messages
- has_many :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|group_id|references|null: false, foreign_key: true|
|user_id|references|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group

### groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, unique :true|

### Association

- has_many: group_users
- has_many: users through: :group_users
- has_many: messages

## gurups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association

- belongs_to :user
- belongs_to :group
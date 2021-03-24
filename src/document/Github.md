# 깃허브 사용방법

## 개인 저장소에서 작업하기

- https://github.com/new 링크에 접속하여 프로젝트를 생성합니다.
- 프로젝트의 주소를 복사합니다.
- 프로젝트를 다운받습니다.

  ```
  $ git clone [프로젝트 주소]
  $ git cd [프로젝트 주소]
  ```

- 개발 브랜치를 생성 후, 그 브랜치로 이동합니다.

  ```
  $ git branch -c develop
  $ git checkout develop
  ```

- 개발할 기능에 맞게 브랜치를 생성 후, 그 브랜치로 이동합니다.

  ```
  $ git branch -c feat/[기능명]
  $ git checkout feat/[기능명]
  ```

- 개발하면서 수정한 내용을 하나씩 커밋합니다.

  ```
  $ git add [수정한 파일 경로]
  $ git commit -m '로고 파일 추가'
  ```

- 개발이 완료되면 develop 브랜치에 feat/[기능명] 브랜치를 merge 합니다.

  ```
  $ git checkout develop
  $ git merge feat/[기능명]
  ```

---

<br>

## 함께하는 저장소에서 작업하기

- 만들어져 있는 공용 프로젝트 링크에 접속하여 프로젝트를 Fork 합니다.
- Fork 해서 가져온 프로젝트의 주소를 복사합니다.
- Fork 해서 가져온 프로젝트를 다운받습니다.

  ```

  $ git clone [프로젝트 주소]
  $ git cd [프로젝트 주소]

  ```

- 원본 프로젝트의 저장소를 등록합니다.

  ```

  $ git remote add team [원본 프로젝트 주소]

  ```

- 개발 브랜치가 없다면 생성 한 다음, 그 브랜치로 이동합니다.

  ```

  $ git branch -c develop
  $ git checkout develop

  ```

- 개발할 기능에 맞게 브랜치를 생성 후, 그 브랜치로 이동합니다.

  ```

  $ git branch -c feat/[기능명]
  $ git checkout feat/[기능명]

  ```

- 개발하면서 수정한 내용을 하나씩 커밋합니다.

  ```

  $ git add [수정한 파일 경로]
  $ git commit -m '로고 파일 추가'

  ```

- 개발이 완료되면 feat/[기능명] 브랜치를 rebase 합니다.

  ```
  $ git fetch team
  $ git rebase team/develop

  ```

- 충돌이 있다면 수정 후 커밋합니다.
- 충돌이 다 해결되면 깃허브에 Pull Request를 올립니다.<br>
  `team/develope <- origin/feat/[기능명]`

---

<br>

## 원본 코드의 최신화를 위해 코드를 보관하기

- 코드 보관하기 (git stash)

  ```
  $ git add .
  $ git stash
  ```

- 코드 최신화 하기

  ```
  git fetch --all
  git rebase team/develop
  ```

- 보관한 코드 불러오기
  ```
  git stash pop
  ```

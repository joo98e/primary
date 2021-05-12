# Primary
Primary PROTO dev

#### 추가 기능
> 5) helpMe(); => 함수에 대한 간략 설명, 설정값 등 설명
> 6) 구간반복, 마우스 오버시 썸네일
> 7) ajax 다운로드
> 8) ajax srt
> 9) TODO 네온 버튼
>  - https://www.youtube.com/watch?v=ex7jGbyFgpA
> 10) /\s/g
> 11) 스크롤바 플러그인

#### 정규식
```
전자우편 주소:
/^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/

URL:
/^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/

HTML 태그 - HTML tags:
/\<(/?[^\>]+)\>/

전화 번호 - 예, 123-123-2344 혹은 123-1234-1234:
/(\d{3}).*(\d{3}).*(\d{4})/

날짜 - 예, 3/28/2007 혹은 3/28/07:
/^\d{1,2}\/\d{1,2}\/\d{2,4}$/

jpg, gif 또는 png 확장자를 가진 그림 파일명:
/([^\s]+(?=\.(jpg|gif|png))\.\2)/

1부터 50 사이의 번호 - 1과 50 포함:
/^[1-9]{1}$|^[1-4]{1}[0-9]{1}$|^50$/

16 진수로 된 색깔 번호:
/#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?/

적어도 소문자 하나, 대문자 하나, 숫자 하나가 포함되어 있는 문자열(8글자 이상 15글자 이하) - 올바른 암호 형식을 확인할 때 사용될 수 있음:
/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/








숫자만 가능 : [ 0 ~ 9 ] 주의 : 띄어쓰기 불가능
/^[0-9]+$/

 

 이메일 형식만 가능

/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

 

한글만 가능 : [ 가나다라 ... ] 주의 : ㄱㄴㄷ... 형식으로는 입력 불가능 , 띄어쓰기 불가능
/^[가-힣]+$/

 

한글,띄어쓰기만 가능 : [ 가나다라 ... ] 주의 : ㄱㄴㄷ... 형식으로는 입력 불가능 , 띄어쓰기 가능
/^[가-힣\s]+$/

 

영문만 가능 :
/^[a-zA-Z]+$/

 

 영문,띄어쓰기만 가능
/^[a-zA-Z\s]+$/

 

전화번호 형태 : 전화번호 형태 000-0000-0000 만 받는다. ]
/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/

 

도메인 형태, http:// https:// 포함안해도 되고 해도 되고
/^(((http(s?))\:\/\/)?)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/

 

도메인 형태, http:// https:// 꼭 포함
/^((http(s?))\:\/\/)([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/

 

도메인 형태, http:// https:// 포함하면 안됨
/^[^((http(s?))\:\/\/)]([0-9a-zA-Z\-]+\.)+[a-zA-Z]{2,6}(\:[0-9]+)?(\/\S*)?$/

 

한글과 영문만 가능
/^[가-힣a-zA-Z]+$/;

 

숫자,알파벳만 가능
/^[a-zA-Z0-9]+$/;

 

주민번호, -까지 포함된 문자열로 검색
/^(?:[0-9]{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[1,2][0-9]|3[0,1]))-[1-4][0-9]{6}$/


Jquery 에서는 $.test() 메서드로,

 PHP 에서는 preg_match() 함수로 사용





정규표현식의 기본 문법

정규표현식은 소프트웨어에 따라서 방식이나 지원 범위가 다를 수 있습니다.


^The	The로 시작하는 문자열
of despair$	of despair로 끝나는 문자열
^abc$	abc로 시작하고 abc로 끝나는 문자열 (abc 라는 문자열도 해당됨)
notice	notice가 들어 있는 문자열


ab*	a 다음에 b가 0개 이상 (a, ab, abbb 등등)
ab+	a 다음에 b가 1개 이상 (ab, abbb 등등)
ab?	a 다음에 b가 있거나 없거나 (ab 또는 a)


ab{2}	a 다음에 b가 2개 있는 문자열 (abb)
ab{2,}	a 다음에 b가 2개 이상 (abb, abbbb 등등)
ab{3,5}	a 다음에 b가 3개에서 5개 사이 (abbb, abbbb, 또는 abbbbb)
*, +, ?는 각각 {0,}, {1,}, {0,1}과 같습니다.


( )는 문자열을 묶음 처리할 때 사용
a(bc)*	a 다음에 bc가 0개 이상 (묶음 처리)
a(bc){1,5}	a 다음에 bc가 1개에서 5개 사이


hi|hello	hi나 hello가 들어 있는 문자열
(b|cd)ef	bef 또는 cdef
(a|b)*c	a와 b가 섞여서 여러번 나타나고 그뒤에 c가 붙어있는 패턴


. (점)	임의의 한 문자
^.{3}$	3문자로만 되어 있는 문자열


[ ]	괄호 안에 있는 내용 중 임의의 한 문자
[^ ]	첫문자로 ^를 쓰면 괄호 내용의 부정. 즉 괄호 안에 포함되지 않는 한 문자
[ab]	a 또는 b (a|b 와 동일한 표현)
[a-d]	소문자 a에서 d까지 (a|b|c|d 또는 [abcd] 와 동일)
^[a-zA-Z]	영문자로 시작하는 문자열
[0-9]%	% 문자 앞에 하나의 숫자가 붙어 있는 패턴
%[^a-zA-Z]%	두 % 문자 사이에 영문자가 없는 패턴


특수 문자 자체를 검색하기 및 사용하기
\^	^	\.	.
\[	[	\$	$
\(	(	\)	)
\|	|	\*	*
\+	+	\?	?
\{	{	\\	\
\n	줄넘김 문자	\r	리턴 문자
\w	알파벳과 _ (언더바)	\W	알파벳과 _ 가 아닌 것
\s	빈 공간(space)	\S	빈 공간이 아닌 것
\d	숫자	\D	숫자가 아닌 것
\b	단어와 단어 사이의 경계	\B	단어 사이의 경계가 아닌 것
\t	Tab 문자	\xnn	16진수 nn에 해당하는 문자
[ ] 안에서는 특수 문자가 모두 효력을 잃게 됩니다.


검색 + 치환을 위한 하부식(부분식)
( )로 둘러싼 부분은 각각 하나의 덩어리로 취급해서,
검색시 ( ) 안에 해당되는 내용들을 변경할 내용에서 그대로 가져다 이용할 수 있습니다.
검색된 각각의 ( )안에 해당되는 내용은 변경할 내용에서 $1, $2, .. 등으로 지정해서 쓸 수 있습니다.
예제) mp3파일 이름 바꾸기
검색 : (.*) - (.*)\.mp3 .*은 길이에 상관없이 임의의 문자열, \.은 점
치환 : $2 - $1.mp3 앞에서 검색한 ( )안에 해당되는 내용끼리 순서 바꾸기
ex) "제목 - 연주자.mp3" Þ "연주자 - 제목.mp3"
앞에서 정의한 하부식을 다시 활용하기 (제가 잘못 이해한 것일 수도 있는데)
\n은 ( ) 하부식 중에서 n번째 하부식을 가리킵니다.
예제) (.+)\1+
\1로 되어 있으니까 첫번째 부분식 (.+)를 가리킵니다. 위 내용을 해석하자면, 일단 (.+)가 있으니까 이에 해당되는 내용을 찾고, \1+이 있으니까 첫번째 부분식 (.+)와 똑같은 내용이 그 뒤에 1번 이상 있는 문자열을 찾습니다.
예제) abab같은 문자열이 위에 해당되는데, 일단 (.+) 즉 임의의 문자열 ab를 찾고 그 뒤에 \1+로 첫번째 부분식을 다시 1번 이상 있는 것을 찾으니까 뒤의 ab가 이에 해당합니다.


변경자 ? 검색 방식 변경
(?i)	대소문자 무시 (기본값)
(?-i)	대소문자 구분
(?g)	"greedy" 모드로 전환 (기본값)
(?-g)	"greedy" 모드 해제, 따라서 "+"는 "+?"과 동일한 것으로 인식


```

#### 추가
```
div.insertAdjacentHTML('', target);

'beforebegin'
element 앞에 
타켓 요소 전(형제레벨)에 생성- 시작 태그의 앞(형제 레벨로)

'afterbegin'
element 안에 가장 첫번째 child
타켓 요소 다음(자식요소)에 생성 - 시작 태그의 뒤(자식 요소로)

'beforeend'
element 안에 가장 마지막 child
타켓 요소 끝나는 태그 바로 직전(자식요소로)에 요소를 생성 - 종료 태그 앞(자식 요소로)

'afterend'
element 뒤에
타켓 요소의 끝나는 태그 바로 다음(형제레벨)에 요소를 생성 - 종료 태그 뒤(형제 레벨로)


```

#### git init
> ```
> git init
> git remote add 사용자 Repository
> ex) git remote add main https://github.com/joo98e/repository.git
> ex) git remote add origin https://github.com/joo98e/repository.git
> ex) git remote add master https://github.com/joo98e/repository.git
> ```

---
#### git 시작하기(파일 가져오기)

> ```
> git clone Repository
> ex) git clone https://github.com/joo98e/repository.git
> ```

---
#### git 상태 확인
> 명령어가 마음처럼 실행되지 않을 때 상태를 확인해본다.
> ```
> git status
> ```

---
#### git commit 
> 추가된 파일들을 리스트업한다.
> ```
> git add ./
> ```
> 리스트업된 파일들을 commit과 동시에 메세지를 남긴다. 
> ```
> git commit -m "메세지"
> ```

---
#### git Push
> 추가된 파일들을 remote된 사용자의 권한(이름)으로 푸쉬한다.
> ```
> git push origin 사용자
> ex) git push origin main
> ex) git push origin master
> ex) git push origin origin
> ```

---
#### 2021_02_15, git command
> ```
> 1. 설정과 초기화
> 전역 사용자명/이메일 구성하기
> git config - -global user.name “Your name”
> git config - -global user.email “Your email address”
> 저장소별 사용자명/이메일 구성하기 (해당 저장소 디렉터리로 이동후)
> git config user.name “Your name”
> git config user.email “Your email address”
> 전역 설정 정보 조회
> git config - -global - -list
> 저장소별 설정 정보 조회
> git config - -list
> Git의 출력결과 색상 활성화하기
> git config - -global color.ui “auto”
> 새로운 저장소 초기화하기
> mkdir /path/newDir
> cd /path/newDir
> git init
> 저장소 복제하기
> git clone <저장소 url>
> 새로운 원격 저장소 추가하기
> git remote add <원격 저장소> <저장소 url>
> 2. 기본적인 사용법
> 아래 명령어에서 [ ]는 선택적인 매개변수를 의미한다.
> 새로운 파일을 추가하거나 존재하는 파일 스테이징하고 커밋하기
> git add <파일>
> git commit -m “<메시지>”
> 파일의 일부를 스테이징하기
> git add -p [<파일> [<파일> [기타 파일들…]]]
> add 명령에서 Git 대화 모드를 사용하여 파일 추가하기
> git add -i
> 수정되고 추적되는 파일의 변경 사항 스테이징하기
> git add -u [<경로> [<경로>]]
> 수정되고 추적되는 모든 파일의 변경 사항 커밋하기
> git commit -m “<메시지>” -a
> 작업 트리의 변경 사항 돌려놓기
> git checkout HEAD <파일> [<파일>]
> 커밋되지 않고 스테이징된 변경 사항 재설정하기
> git reset HEAD <파일> [<파일>]
> 마지막 커밋 고치기
> git commit -m “<메시지>” - -amend
> 이전 커밋을 수정하고 커밋 메시지를 재사용하기
> git commit -C HEAD - -amend
> 3. 브랜치
> 지역 브랜치 목록 보기
> git branch
> 원격 브랜치 목록 보기
> git branch -r
> 지역과 원격을 포함한 모든 브랜치 목록 보기
> git branch -a
> 현재 브랜치에서 새로운 브랜치 생성하기
> git branch <새로운 브랜치>
> 다른 브랜치 체크아웃하기
> git checkout <브랜치>
> 현재 브랜치에서 새로운 브랜치 생성하고 체크아웃하기
> git checkout -b <새로운 브랜치>
> 다른 시작 지점에서 브랜치 생성하기
> git branch <새로운 브랜치> <브랜치를 생성할 위치>
> 기존의 브랜치를 새로운 브랜치로 덮어쓰기
> git branch -f <기존 브랜치> [<브랜치를 생성할 위치>]
> 브랜치를 옮기거나 브랜치명 변경하기
> git checkout -m <기존 브랜치> <새로운 브랜치>
> <새로운 브랜치>가 존재하지 않을 경우
> git checkout -M <기존 브랜치> <새로운 브랜치>
> 무조건 덮어쓰기
> 다른 브랜치를 현재 브랜치로 합치기
> git merge <브랜치>
> 커밋하지 않고 합치기
> git merge - -no-commit <브랜치>
> 선택하여 합치기
> git cherry-pick <커밋명>
> 커밋하지 않고 선택하여 합치기
> git cherry-pick -n <커밋명>
> 브랜치의 이력을 다른 브랜치에 합치기
> git merge - -squash <브랜치>
> 브랜치 삭제하기
> git branch -d <삭제할 브랜치>
> 삭제할 브랜치가 현재 브랜치에 합쳐졌을 경우에만
> git branch -D <삭제할 브랜치>
> 삭제할 브랜치가 현재 브랜치에 합쳐지지 않았어도
> 4. Git 이력
> 모든 이력 보기
> git log
> 변경 사항을 보여주는 패치와 함께 로그 표시하기
> git log -p
> 1개의 항목만 보이도록 로그 개수 제한하기
> git log -1
> 20개의 항목과 패치만 보이도록 로그 제한하기
> git log -20 -p
> 6개월 동안의 커밋 로그 보기
> git log - -since=”6 hours”
> 이틀 전까지의 커밋 로그 보기
> git log - -before=”2 days”
> HEAD보다 세 개 이전의 커밋 로그 보기
> git log -1 HEAD-3
> git log -1 HEAD^^^
> git log -1 HEAD~1^^
> 두 지점 사이의 커밋 로그 보기
> git log <시작 지점>…<끝 지점>
> 시작 지점이나 끝 지점은 커밋명, 브랜치명, 혹은 태그명이 될 수 있고 조합하여 사용 가능하다.
> 각 항목의 로그 이력 한 줄씩 보기
> git log - -pretty=oneline
> 각 항목마다 영향 받은 줄의 통계 보기
> git log - -stat
> 커밋할 시점의 파일 상태 보기
> git log - -name-status
> 현재 작업 트리와 인덱스의 차이점 보기
> git diff
> 인덱스와 저장소의 차이점 보기
> git diff - -cached
> 작업 트리와 저장소의 차이점 보기
> git diff HEAD
> 작업 트리와 특정 위치 간의 차이점 보기
> git diff <시작 지점>
> 시작 지점은 커밋명 or 브랜치명 or 태그명이다.
> 저장소의 두 지점 사이의 차이점 보기
> git diff <시작 지점> <끝 지점>
> 차이점의 통계 보기
> git diff - -stat <시작 지점> [<끝 지점>]
> 파일의 커밋 정보 줄 단위로 보기
> git blame <파일>
> 파일의 줄 단위의 복사, 붙여 넣기, 이동 정보 보기
> git blame -M <파일>
> 파일의 줄 단위의 이동과 원본 파일 정보 보기
> git blame -C -C <파일>
> 로그에서 복사와 붙여 넣은 정보 보기
> git log -C -C -p -1 <특정 지점>
> 5. 원격 저장소
> 저장소 복제하기
> git clone <저장소>
> 마지막 200개의 커밋만 포함하여 저장소 복제하기
> git clone - -depth 200 <저장소>
> 새로운 원격 저장소 추가하기
> git remote add <원격 저장소> <저장소 url>
> 모든 원격 브랜치 목록 보기
> git branch -r
> 원격 브랜치에서 지역 브랜치 생성하기
> git branch <새로운 브랜치> <원격 브랜치>
> 원격 태그에서 지역 브랜치 생성하기
> git branch <새로운 브랜치> <원격 태그>
> origin 저장소에서 합치지 않고 지역 브랜치로 변경 사항 가져오기
> git fetch
> 원격 저장소에서 합치지 않고 지역 브랜치로 변경 사항 가져오기
> git fetch <원격 저장소>
> 원격 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
> git pull <원격 저장소>
> origin 저장소에서 변경 사항을 가져와 현재 브랜치에 합치기
> git pull
> 지역 브랜치를 원격 브랜치에 푸싱하기
> git push <원격 저장소> <지역 브랜치>:<원격 브랜치>
> 지역 브랜치를 동일한 이름의 원격 브랜치에 푸싱하기
> git push <원격 저장소> <지역 브랜치>
> 새로운 로컬 브랜치를 원격 저장소에 푸싱하기
> git push <원격 저장소> <지역 브랜치>
> 원격 저장소에서 쓸모가 없어진 원격 브랜치 제거하기
> git remote prune <원격 저장소>
> 원격 저장소를 제거하고 관련된 브랜치도 제거하기
> git remote rm <원격 저장소>
> 위에 작성된 명령어들은 주로 사용될만한 명령어들이고 이외에도 git 의 명령어는 상당히 많다. 더 다양한 사용법들을 알아보고자 한다면 아래 링크에서 확인하면 된다.

---

### sql 프로시저
```
-- DB 선택
USE myboard;
-- 구분 기호 설정
DELIMITER $$
-- 프로시저 있을 경우 삭제
DROP PROCEDURE IF EXISTS myProc;
-- 프로시저 생성
CREATE PROCEDURE myProc()
-- 시작
BEGIN
	DECLARE i INT DEFAULT 1; -- 변수할당
    WHILE (i < 30) DO -- 와일 시작
    INSERT INTO myboard.board(
		writer,
        title,
        content,
        hits
    ) VALUES (
		concat('글쓴이_', i),
        concat('글제목_', i),
        concat('글내용_', i),
        i
    );
    SET i = i + 1; -- i 증가
    END WHILE; -- 와일 끝
END $$ -- 딜리미터 끝
DELIMITER ; -- 구분 기호 변경

-- 이 후, 프로시저 콜
CALL myProc();
SELECT * FROM board;
```
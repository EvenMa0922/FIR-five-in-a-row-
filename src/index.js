import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render(){
        return (
            <button
                className="square"
                onClick={() => this.props.onClick()}
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(81).fill(null),
            xIsNext: true,
            index: 0,
            finished: false,
        };
    }

    handleClick(i) {
        if (this.state.finished) return true;
        const squares = this.state.squares.slice();
        this.setState({
            index: i,
        })
        if (squares[i]) return;
        if (calculateWinner(squares, i, this.state.xIsNext) || squares[i]) {
            squares[i] = this.state.xIsNext ? 'X' : 'O';
            this.setState({
                squares: squares,
                finished: true,
                // xIsNext: !this.state.xIsNext,
            });
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        // const winner = calculateWinner(this.state.squares, this.state.index, this.state.xIsNext);
        let status;
        if (this.state.finished) {
            var a = this.state.xIsNext ? 'X' : 'O';
            status = 'Winner: ' + a;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                    {this.renderSquare(12)}
                </div>
                <div className="board-row">
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                </div>
                <div className="board-row">
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                    {this.renderSquare(30)}
                    {this.renderSquare(31)}
                    {this.renderSquare(32)}
                    {this.renderSquare(33)}
                    {this.renderSquare(34)}
                    {this.renderSquare(35)}
                    {this.renderSquare(36)}
                    {this.renderSquare(37)}
                    {this.renderSquare(38)}
                </div>
                <div className="board-row">
                    {this.renderSquare(39)}
                    {this.renderSquare(40)}
                    {this.renderSquare(41)}
                    {this.renderSquare(42)}
                    {this.renderSquare(43)}
                    {this.renderSquare(44)}
                    {this.renderSquare(45)}
                    {this.renderSquare(46)}
                    {this.renderSquare(47)}
                    {this.renderSquare(48)}
                    {this.renderSquare(49)}
                    {this.renderSquare(50)}
                    {this.renderSquare(51)}
                </div>
                <div className="board-row">
                    {this.renderSquare(52)}
                    {this.renderSquare(53)}
                    {this.renderSquare(54)}
                    {this.renderSquare(55)}
                    {this.renderSquare(56)}
                    {this.renderSquare(57)}
                    {this.renderSquare(58)}
                    {this.renderSquare(59)}
                    {this.renderSquare(60)}
                    {this.renderSquare(61)}
                    {this.renderSquare(62)}
                    {this.renderSquare(63)}
                    {this.renderSquare(64)}
                </div>
                <div className="board-row">
                    {this.renderSquare(65)}
                    {this.renderSquare(66)}
                    {this.renderSquare(67)}
                    {this.renderSquare(68)}
                    {this.renderSquare(69)}
                    {this.renderSquare(70)}
                    {this.renderSquare(71)}
                    {this.renderSquare(72)}
                    {this.renderSquare(73)}
                    {this.renderSquare(74)}
                    {this.renderSquare(75)}
                    {this.renderSquare(76)}
                    {this.renderSquare(77)}
                </div>
                <div className="board-row">
                    {this.renderSquare(78)}
                    {this.renderSquare(79)}
                    {this.renderSquare(80)}
                    {this.renderSquare(81)}
                    {this.renderSquare(82)}
                    {this.renderSquare(83)}
                    {this.renderSquare(84)}
                    {this.renderSquare(85)}
                    {this.renderSquare(86)}
                    {this.renderSquare(87)}
                    {this.renderSquare(88)}
                    {this.renderSquare(89)}
                    {this.renderSquare(90)}
                </div>
                <div className="board-row">
                    {this.renderSquare(91)}
                    {this.renderSquare(92)}
                    {this.renderSquare(93)}
                    {this.renderSquare(94)}
                    {this.renderSquare(95)}
                    {this.renderSquare(96)}
                    {this.renderSquare(97)}
                    {this.renderSquare(98)}
                    {this.renderSquare(99)}
                    {this.renderSquare(100)}
                    {this.renderSquare(101)}
                    {this.renderSquare(102)}
                    {this.renderSquare(103)}
                </div>
                <div className="board-row">
                    {this.renderSquare(104)}
                    {this.renderSquare(105)}
                    {this.renderSquare(106)}
                    {this.renderSquare(107)}
                    {this.renderSquare(108)}
                    {this.renderSquare(109)}
                    {this.renderSquare(110)}
                    {this.renderSquare(111)}
                    {this.renderSquare(112)}
                    {this.renderSquare(113)}
                    {this.renderSquare(114)}
                    {this.renderSquare(115)}
                    {this.renderSquare(116)}
                </div>
                <div className="board-row">
                    {this.renderSquare(117)}
                    {this.renderSquare(118)}
                    {this.renderSquare(119)}
                    {this.renderSquare(120)}
                    {this.renderSquare(121)}
                    {this.renderSquare(122)}
                    {this.renderSquare(123)}
                    {this.renderSquare(124)}
                    {this.renderSquare(125)}
                    {this.renderSquare(126)}
                    {this.renderSquare(127)}
                    {this.renderSquare(128)}
                    {this.renderSquare(129)}
                </div>
                <div className="board-row">
                    {this.renderSquare(130)}
                    {this.renderSquare(131)}
                    {this.renderSquare(132)}
                    {this.renderSquare(133)}
                    {this.renderSquare(134)}
                    {this.renderSquare(135)}
                    {this.renderSquare(136)}
                    {this.renderSquare(137)}
                    {this.renderSquare(138)}
                    {this.renderSquare(139)}
                    {this.renderSquare(140)}
                    {this.renderSquare(141)}
                    {this.renderSquare(142)}
                </div>
                <div className="board-row">
                    {this.renderSquare(143)}
                    {this.renderSquare(144)}
                    {this.renderSquare(145)}
                    {this.renderSquare(146)}
                    {this.renderSquare(147)}
                    {this.renderSquare(148)}
                    {this.renderSquare(149)}
                    {this.renderSquare(150)}
                    {this.renderSquare(151)}
                    {this.renderSquare(152)}
                    {this.renderSquare(153)}
                    {this.renderSquare(154)}
                    {this.renderSquare(155)}
                </div>
                <div className="board-row">
                    {this.renderSquare(156)}
                    {this.renderSquare(157)}
                    {this.renderSquare(158)}
                    {this.renderSquare(159)}
                    {this.renderSquare(160)}
                    {this.renderSquare(161)}
                    {this.renderSquare(162)}
                    {this.renderSquare(163)}
                    {this.renderSquare(164)}
                    {this.renderSquare(165)}
                    {this.renderSquare(166)}
                    {this.renderSquare(167)}
                    {this.renderSquare(168)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);

function calculateWinner(squares, index, player) {
    if (checkRow(squares, index, player)) return true;
    if (checkCol(squares, index, player)) return true;
    if (checkDiag1(squares, index, player)) return true;
    if (checkDiag2(squares, index, player)) return true;

    return null;
}

function checkDiag2(squares, index, player) {
    var numPic = 0;
    var i = index;
    var j = index + 12;
    var currentPlayer = player ? 'X' : 'O';

    do {
        if (i >= 0 && i <= 13 || i % 13 == 12) {
            numPic++;
            break;
        } else {
            numPic++;
            i -= 12;
            if (i < 0) break;
        }
        if (numPic >= 5) return true;
    } while ( squares[i] == currentPlayer )

    if (numPic >= 5) return true;

    while ( squares[j] == currentPlayer ) {
        if (j >= 156 && j <=168 || j % 13 == 0) {
            numPic++;
            break;
        } else {
            numPic++;
            j += 12;
            if (j > 168) break;
        }
    }

    if (numPic >= 5) return true;

    return false;
}

function checkDiag1(squares, index, player) {
    var numPic = 0;
    var i = index;
    var j = index + 14;
    var currentPlayer = player ? 'X' : 'O';

    do {
        if (i >= 0 && i <= 13 || i % 13 == 0) {
            numPic++;
            break;
        } else {
            numPic++;
            i -= 14;
            if (i < 0) break;
        }
        if (numPic >= 5) return true;
    } while ( squares[i] == currentPlayer )

    if (numPic >= 5) return true;

    while ( squares[j] == currentPlayer ) {
        if (j >= 156 && j <=168 || j % 13 == 12) {
            numPic++;
            break;
        } else {
            numPic++;
            j += 14;
            if (j > 168) break;
        }
    }

    if (numPic >= 5) return true;

    return false;
}

function checkCol(squares, index, player) {
    var numPic = 0;
    var i = index;
    var j = index + 13;
    var currentPlayer = player ? 'X' : 'O';

    do {
        if (i >= 156 && i <= 168) {
            numPic++;
            break;
        } else {
            numPic++;
            i -= 13;
            if (i < 0) break;
        }
        if (numPic >= 5) return true;
    } while ( squares[i] == currentPlayer )

    if (numPic >= 5) return true;

    while ( squares[j] == currentPlayer ) {
        if (j >= 156 && j <=168) {
            numPic++;
            break;
        } else {
            numPic++;
            j += 13;
            if (j > 168) break;
        }
    }

    if (numPic >= 5) return true;

    return false;
}

function checkRow(squares, index, player) {
    var numPic = 0;
    var i = index;
    var j = index + 1;
    var currentPlayer = player ? 'X' : 'O';

    do {
        if (i % 13 == 0) {
            numPic++;
            break;
        } else {
            numPic++;
            i--;
        }
        if (numPic >= 5) return true;
    } while ( squares[i] == currentPlayer )

    if (numPic >= 5) return true;

    while ( squares[j] == currentPlayer ) {
        if (j % 13 == 0) {
            break;
        } else {
            numPic++;
            j++;
        }
    }

    if (numPic >= 5) return true;

    return false;
}